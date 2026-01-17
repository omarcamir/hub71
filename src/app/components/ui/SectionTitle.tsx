type SectionTitleProps = {
    title?: string
    subtitle?: string
}
const SectionTitle = ({title,subtitle}:SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-2.5 mb-7">
        <h4 className="text-sm font-bold text-main-color">{subtitle}</h4>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</h2>
    </div>
  )
}

export default SectionTitle