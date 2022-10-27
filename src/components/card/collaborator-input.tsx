const CollaboratorInput = ({
  collaborator,
  onChange,
}: {
  collaborator: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <input
    className="w-full focus:outline-none"
    value={collaborator}
    onChange={onChange}
    placeholder="New collaborator"
  />
)

export default CollaboratorInput
