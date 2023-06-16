export default function Background() {
  return (
    <div className="absolute z-[-1] min-h-screen w-full">
      {/* Stars */}
      <div className="absolute h-[300%] min-w-full bg-[url(../assets/stars.png)] bg-repeat" />
      {/* Blur Rosa */}
      <div className="absolute -bottom-28 right-10 h-[420px] w-[420px] rounded-full bg-rosa/60 blur-[200px]" />
      {/* Blur Azul 1 */}
      <div className="absolute -left-20 -top-32 h-[600px] w-[600px]  rounded-full bg-azul-400/80 blur-[200px]" />
      {/* Blur Azul 2 */}
      <div className="absolute -bottom-[80%] -left-[400px] z-[-1] h-[500px] w-[1200px] rounded-full bg-azul-600/80 blur-[160px]" />
      {/* Blur Azul 3 */}
      <div className="absolute -bottom-[320%] -right-60 z-[-1] h-[600px] w-[1200px] rounded-full bg-azul-200/20 blur-[240px]" />
    </div>
  )
}
