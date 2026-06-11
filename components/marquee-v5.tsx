export function MarqueeV5() {
  return (
    <div className="w-full h-auto bg-black">
      <iframe
        src="/marquee_v5.html"
        className="w-full border-none"
        style={{ height: "100vh" }}
        title="LED Marquee"
        allowFullScreen
      />
    </div>
  );
}
