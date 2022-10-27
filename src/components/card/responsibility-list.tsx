import RemoveResponsibilityButton from './remove-responsibility-button'
import ResponsibilityInput from './responsibility-input'

const ResponsibilityList = ({
  responsibilities,
  onChange,
  onClickRemoveBtn,
}: {
  responsibilities: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
  onClickRemoveBtn: (index: number) => void
}) => (
  <>
    {responsibilities.map((responsibility, index) => (
      <div key={`r_${index}`} className="flex px-8 py-4">
        <ResponsibilityInput
          responsibility={responsibility}
          onChange={(e) => onChange(e, index)}
        />
        <RemoveResponsibilityButton index={index} onClick={onClickRemoveBtn} />
      </div>
    ))}
  </>
)

export default ResponsibilityList
