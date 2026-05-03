export default function Page() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-semibold">
        Boudhanath Stupa – Street View
      </h1>

      <iframe
        src="https://maps.google.com/maps?q=&layer=c&cbll=27.7215,85.3620&cbp=11,0,0,0,0&output=svembed"
        className="w-full h-[500px] rounded-xl border"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
