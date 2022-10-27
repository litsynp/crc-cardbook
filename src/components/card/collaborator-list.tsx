import CollaboratorInput from './collaborator-input'
import RemoveCollaboratorButton from './remove-collaborator-button'

const CollaboratorList = ({
  collaborators,
  onChange,
  onClickRemoveBtn,
}: {
  collaborators: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
  onClickRemoveBtn: (index: number) => void
}) => (
  <>
    {collaborators.map((collaborator, index) => (
      <div key={`c_${index}`} className="flex px-8 py-4">
        <CollaboratorInput
          onChange={(e) => onChange(e, index)}
          collaborator={collaborator}
        />
        <RemoveCollaboratorButton index={index} onClick={onClickRemoveBtn} />
      </div>
    ))}
  </>
)

export default CollaboratorList
