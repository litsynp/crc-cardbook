import CircleButton from '../common/circle-button'

const RemoveResponsibilityButton = ({
  index,
  onClick,
}: {
  index: number
  onClick: (index: number) => void
}) => (
  <CircleButton
    backgroundColor="gray"
    text="X"
    onClick={() => onClick(index)}
  />
)

export default RemoveResponsibilityButton
