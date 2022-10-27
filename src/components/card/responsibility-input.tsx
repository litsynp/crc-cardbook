const ResponsibilityInput = ({
  responsibility,
  onChange,
}: {
  responsibility: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <input
    className="w-full focus:outline-none"
    value={responsibility}
    onChange={onChange}
    placeholder="New responsibility"
  />
)

export default ResponsibilityInput
