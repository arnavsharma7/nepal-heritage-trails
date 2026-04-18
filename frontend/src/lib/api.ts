// ============================================================
// API Client — Fetches data from the Express backend
// ============================================================

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function fetchAPI(endpoint: string, options?: RequestInit) {
    const url = `${API_BASE}${endpoint}`;
    try {
        const res = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options?.headers,
            },
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return await res.json();
    } catch {
        console.warn(`API fetch failed for ${endpoint}, using fallback data`);
        return null;
    }
}

// Experiences
export const getExperiences = (params?: string) =>
    fetchAPI(`/experiences${params ? `?${params}` : ""}`);

export const getExperience = (id: string) => fetchAPI(`/experiences/${id}`);

export const getCategories = () => fetchAPI("/experiences/categories");

// Trails
export const getTrails = () => fetchAPI("/trails");

export const getFeaturedTrails = () => fetchAPI("/trails/featured");

export const getTrail = (id: string) => fetchAPI(`/trails/${id}`);

export const generateTrail = (data: {
    interests: string[];
    duration: number;
    budget: number;
    travel_style: string;
}) =>
    fetchAPI("/trails/generate", {
        method: "POST",
        body: JSON.stringify(data),
    });

// Impact
export const getImpactStats = () => fetchAPI("/impact/stats");

export const getImpactDistribution = () => fetchAPI("/impact/distribution");

// Auth
export const login = (email: string, password: string) =>
    fetchAPI("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

export const register = (data: {
    email: string;
    password: string;
    full_name: string;
    role?: string;
}) =>
    fetchAPI("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
    });

// Bookings
export const createBooking = (data: {
    user_id: string;
    experience_id: string;
    booking_date: string;
    num_guests: number;
}) =>
    fetchAPI("/bookings", {
        method: "POST",
        body: JSON.stringify(data),
    });

// Users
export const getUserDashboard = (userId: string) =>
    fetchAPI(`/users/${userId}/dashboard`);
