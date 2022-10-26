const TW_WIDTH_10 = '2.5rem'
const TW_DROP_SHADOW_XL =
  'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'
const TW_ROUNDED_FULL = '9999px'

const CircleButton = ({
  text,
  onClick,
  backgroundColor,
  textColor: color,
  borderColor,
}: {
  text: string
  onClick: () => void
  backgroundColor: string
  textColor: string
  borderColor: string
}) => {
  return (
    <div
      style={{
        display: 'flex',
        width: TW_WIDTH_10,
        height: TW_WIDTH_10,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor,
        color,
        borderColor,
        borderRadius: TW_ROUNDED_FULL,
        filter: TW_DROP_SHADOW_XL,
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={onClick}
    >
      <span className="m-auto font-bold">{text}</span>
    </div>
  )
}

const TW_SLATE_600 = 'rgb(71 85 105)'
const TW_SLATE_200 = 'rgb(226 232 240)'

CircleButton.defaultProps = {
  backgroundColor: TW_SLATE_600,
  textColor: TW_SLATE_200,
  borderColor: TW_SLATE_200,
}

export default CircleButton
