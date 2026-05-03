-- ============================================================
-- Nepal Heritage Trails — PostgreSQL + PostGIS Schema
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- ============================================================
-- ENUMS
-- ============================================================
CREATE TYPE user_role AS ENUM ('tourist', 'provider', 'admin');
CREATE TYPE experience_category AS ENUM ('homestay', 'guide', 'workshop', 'heritage_site');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');
CREATE TYPE payment_method AS ENUM ('khalti', 'fonepay', 'stripe');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE trail_difficulty AS ENUM ('easy', 'moderate', 'challenging', 'extreme');

-- ============================================================
-- USERS
-- ============================================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    full_name VARCHAR(150) NOT NULL,
    role user_role NOT NULL DEFAULT 'tourist',
    avatar_url TEXT,
    phone VARCHAR(20),
    bio TEXT,
    location VARCHAR(255),
    google_id VARCHAR(255) UNIQUE,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- ============================================================
-- EXPERIENCES
-- ============================================================
CREATE TABLE experiences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    short_description VARCHAR(500),
    category experience_category NOT NULL,
    price_per_person DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'NPR',
    duration_hours INTEGER,
    max_guests INTEGER DEFAULT 10,
    location_name VARCHAR(255) NOT NULL,
    location_point GEOGRAPHY(POINT, 4326),
    address TEXT,
    district VARCHAR(100),
    province VARCHAR(100),
    images TEXT[] DEFAULT '{}',
    panorama_url TEXT,
    amenities TEXT[] DEFAULT '{}',
    languages TEXT[] DEFAULT '{}',
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    avg_rating DECIMAL(2,1) DEFAULT 0,
    total_reviews INTEGER DEFAULT 0,
    total_bookings INTEGER DEFAULT 0,
    community_impact_score DECIMAL(3,1) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_experiences_category ON experiences(category);
CREATE INDEX idx_experiences_provider ON experiences(provider_id);
CREATE INDEX idx_experiences_location ON experiences USING GIST(location_point);
CREATE INDEX idx_experiences_price ON experiences(price_per_person);
CREATE INDEX idx_experiences_rating ON experiences(avg_rating DESC);

-- ============================================================
-- TRAILS (AI-Generated Itineraries)
-- ============================================================
CREATE TABLE trails (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    creator_id UUID REFERENCES users(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    cover_image TEXT,
    difficulty trail_difficulty DEFAULT 'moderate',
    duration_days INTEGER NOT NULL,
    total_cost_estimate DECIMAL(12,2),
    currency VARCHAR(3) DEFAULT 'NPR',
    interests TEXT[] DEFAULT '{}',
    travel_style VARCHAR(50),
    is_featured BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT TRUE,
    total_bookings INTEGER DEFAULT 0,
    avg_rating DECIMAL(2,1) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_trails_featured ON trails(is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_trails_difficulty ON trails(difficulty);

-- ============================================================
-- TRAIL DAYS (Day-by-Day Itinerary)
-- ============================================================
CREATE TABLE trail_days (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    trail_id UUID NOT NULL REFERENCES trails(id) ON DELETE CASCADE,
    day_number INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location_name VARCHAR(255),
    location_point GEOGRAPHY(POINT, 4326),
    experience_id UUID REFERENCES experiences(id) ON DELETE SET NULL,
    estimated_cost DECIMAL(10,2),
    travel_time_minutes INTEGER,
    notes TEXT,
    UNIQUE(trail_id, day_number)
);

CREATE INDEX idx_trail_days_trail ON trail_days(trail_id);

-- ============================================================
-- BOOKINGS
-- ============================================================
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    experience_id UUID REFERENCES experiences(id) ON DELETE SET NULL,
    trail_id UUID REFERENCES trails(id) ON DELETE SET NULL,
    booking_date DATE NOT NULL,
    num_guests INTEGER NOT NULL DEFAULT 1,
    total_amount DECIMAL(12,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'NPR',
    status booking_status DEFAULT 'pending',
    special_requests TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT chk_booking_type CHECK (experience_id IS NOT NULL OR trail_id IS NOT NULL)
);

CREATE INDEX idx_bookings_user ON bookings(user_id);
CREATE INDEX idx_bookings_experience ON bookings(experience_id);
CREATE INDEX idx_bookings_status ON bookings(status);

-- ============================================================
-- REVIEWS
-- ============================================================
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    experience_id UUID REFERENCES experiences(id) ON DELETE CASCADE,
    trail_id UUID REFERENCES trails(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT,
    images TEXT[] DEFAULT '{}',
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT chk_review_type CHECK (experience_id IS NOT NULL OR trail_id IS NOT NULL)
);

CREATE INDEX idx_reviews_experience ON reviews(experience_id);
CREATE INDEX idx_reviews_user ON reviews(user_id);

-- ============================================================
-- PAYMENTS
-- ============================================================
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    amount DECIMAL(12,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'NPR',
    method payment_method NOT NULL,
    status payment_status DEFAULT 'pending',
    transaction_id VARCHAR(255),
    gateway_response JSONB,
    paid_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_payments_booking ON payments(booking_id);
CREATE INDEX idx_payments_status ON payments(status);

-- ============================================================
-- COMMUNITY IMPACT
-- ============================================================
CREATE TABLE community_impact (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    experience_id UUID REFERENCES experiences(id) ON DELETE CASCADE,
    provider_id UUID REFERENCES users(id) ON DELETE CASCADE,
    district VARCHAR(100) NOT NULL,
    families_supported INTEGER DEFAULT 0,
    total_revenue_generated DECIMAL(14,2) DEFAULT 0,
    community_share_percentage DECIMAL(5,2) DEFAULT 0,
    cultural_programs_funded INTEGER DEFAULT 0,
    artisans_employed INTEGER DEFAULT 0,
    heritage_sites_maintained INTEGER DEFAULT 0,
    reporting_period DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_impact_district ON community_impact(district);
CREATE INDEX idx_impact_provider ON community_impact(provider_id);

-- ============================================================
-- SAVED EXPERIENCES (Wishlist)
-- ============================================================
CREATE TABLE saved_experiences (
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    experience_id UUID NOT NULL REFERENCES experiences(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    PRIMARY KEY (user_id, experience_id)
);

-- ============================================================
-- TRIGGER: Update updated_at timestamps
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_experiences_updated_at BEFORE UPDATE ON experiences FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_trails_updated_at BEFORE UPDATE ON trails FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
