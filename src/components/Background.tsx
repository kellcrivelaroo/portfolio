export default function Background() {
  return (
    <div className="absolute z-[-1] min-h-screen w-full max-w-[100vw]">
      {/* Stars */}
      <div className="absolute h-[500%] min-w-full bg-[url(../assets/stars.png)] bg-contain bg-repeat lg:h-[400%]" />
      {/* Blur Rosa */}
      <div
        className="absolute -bottom-20 right-0 h-[200px] w-[200px] rounded-full bg-rosa blur-[200px] 
        lg:-bottom-32 lg:right-10 lg:h-[480px] lg:w-[480px] lg:bg-rosa/50"
      />
      {/* Blur Azul 1 */}
      <div
        className="absolute -left-10 -top-2 h-[420px] w-[420px] rounded-full bg-azul-400 blur-[200px] 
        lg:-left-20 lg:-top-32 lg:h-[720px] lg:w-[720px] lg:bg-azul-400/60"
      />
      {/* Blur Azul 2 */}
      <div
        className="absolute -bottom-[180%] -left-[40px] h-[400px] w-[400px] rounded-full bg-azul-600 blur-[160px]
      lg:-bottom-[140%] lg:-left-[400px] lg:h-[700px] lg:w-[1400px] lg:bg-azul-600/60"
      />
      {/* Blur Azul 3 */}
      <div className="absolute -bottom-[320%] -right-[80px] h-[500px] w-[500px] rounded-full bg-azul-200/60  blur-[240px]" />
    </div>
  )
}
