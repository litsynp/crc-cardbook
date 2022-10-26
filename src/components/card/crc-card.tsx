const CRCCard = ({
  card,
}: {
  card: {
    id: string
    candidate: string
    responsibilities: string[]
    collaborators: string[]
  }
}) => {
  return (
    <div className="mx-auto w-[70%] bg-white drop-shadow-xl text-slate-700 divide-y-2 border-slate-200">
      <div className="font-bold text-center py-3">
        <span>{card.candidate}</span>
      </div>
      <div className="flex flex-shrink-0 divide-x-2">
        <div className="w-full divide-y-2 border-slate-200">
          {card.responsibilities.map((responsibility, index) => (
            <div key={`${card.id}_r_${index}`} className="px-8 py-4">
              {responsibility}
            </div>
          ))}
        </div>
        <div className="w-full divide-y-2 border-slate-200">
          {card.collaborators.map((collaborator, index) => (
            <div key={`${card.id}_c_${index}`} className="px-8 py-4 ">
              {collaborator}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CRCCard
