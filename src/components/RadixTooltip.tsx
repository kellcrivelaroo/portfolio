import * as Tooltip from '@radix-ui/react-tooltip'
import Image, { StaticImageData } from 'next/image'

interface RadixTooltipProps {
  icon: StaticImageData
  alt: string
  width?: number
}

export default function RadixTooltip({ icon, alt, width }: RadixTooltipProps) {
  // Alinha a tooltip no caso do tamanho do icone ser diferente do padrão
  function setOffset() {
    if (!width) return
    return (34 - width) / 2 + 5
  }
  return (
    <Tooltip.TooltipProvider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Image
            src={icon}
            alt={alt}
            width={width || 34}
            className="transition-transform duration-300 hover:scale-110 hover:brightness-110"
          />
        </Tooltip.Trigger>
        <Tooltip.Content
          className="tooltip rounded-md bg-gray-50 px-3 py-1 font-medium text-slate-800 shadow-sm
          shadow-azul-200"
          sideOffset={width ? setOffset() : 5}
        >
          {alt}
          <Tooltip.Arrow className="fill-gray-50" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.TooltipProvider>
  )
}
