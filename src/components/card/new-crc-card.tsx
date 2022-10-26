import { memo, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import CircleButton from '../common/circle-button'
import { CRCCardType } from './types'

const CONFIRM_BG_COLOR = 'rgb(23 165 137)'

const NewCRCCard = ({
  onConfirm,
}: {
  onConfirm: (card: CRCCardType) => void
}) => {
  const [candidate, setCandidate] = useState('')
  const [responsibilities, setResponsibilities] = useState<string[]>([])
  const [collaborators, setCollaborators] = useState<string[]>([])

  const ResponsibilityInput = memo<{
    responsibility: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }>(
    ({ responsibility, onChange }) => (
      <input
        className="w-full focus:outline-none"
        value={responsibility}
        onChange={onChange}
        placeholder="New responsibility"
      />
    ),
    (prevProps, nextProps) =>
      prevProps.responsibility !== nextProps.responsibility,
  )

  const CollaboratorInput = memo<{
    collaborator: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }>(
    ({ collaborator, onChange }) => (
      <input
        className="w-full focus:outline-none"
        value={collaborator}
        onChange={onChange}
        placeholder="New collaborator"
      />
    ),
    (prevProps, nextProps) => prevProps.collaborator !== nextProps.collaborator,
  )

  const RemoveResponsibilityBtn = ({ index }: { index: number }) => (
    <CircleButton
      backgroundColor="gray"
      text="X"
      onClick={() => {
        setResponsibilities(responsibilities.filter((_, i) => i !== index))
      }}
    />
  )

  const RemoveCollaboratorBtn = ({ index }: { index: number }) => (
    <CircleButton
      backgroundColor="gray"
      text="X"
      onClick={() => {
        setCollaborators(collaborators.filter((_, i) => i !== index))
      }}
    />
  )

  const NewResponsibilityBtn = () => (
    <CircleButton
      text="+"
      onClick={() => setResponsibilities(responsibilities.concat(''))}
    />
  )

  const NewCollaboratorBtn = () => (
    <CircleButton
      text="+"
      onClick={() => setCollaborators(collaborators.concat(''))}
    />
  )

  const ConfirmBtn = () => (
    <CircleButton
      backgroundColor={CONFIRM_BG_COLOR}
      text="V"
      onClick={() =>
        onConfirm({
          id: uuidv4(),
          candidate,
          responsibilities,
          collaborators,
        })
      }
    />
  )

  const ResponsibilityList = () => (
    <>
      {responsibilities.map((responsibility, index) => (
        <div key={`r_${index}`} className="flex px-8 py-4">
          <ResponsibilityInput
            responsibility={responsibility}
            onChange={(e) => {
              setResponsibilities(
                responsibilities.map((c, i) => {
                  if (i === index) {
                    return e.target.value
                  }
                  return c
                }),
              )
            }}
          />
          <RemoveResponsibilityBtn index={index} />
        </div>
      ))}
    </>
  )

  const CollaboratorList = () => (
    <>
      {collaborators.map((collaborator, index) => (
        <div key={`c_${index}`} className="flex px-8 py-4">
          <CollaboratorInput
            onChange={(e) =>
              setCollaborators(
                collaborators.map((c, i) => {
                  if (i === index) {
                    return e.target.value
                  }
                  return c
                }),
              )
            }
            collaborator={collaborator}
          />
          <RemoveCollaboratorBtn index={index} />
        </div>
      ))}
    </>
  )

  return (
    <div className="mx-auto w-[70%] bg-white drop-shadow-xl text-slate-700 divide-y-2 border-slate-200">
      <div className="text-center py-3 px-8">
        <span>
          <input
            className="w-min-0 w-full font-bold focus:outline-none text-center"
            value={candidate}
            onChange={(e) => setCandidate(e.target.value)}
            placeholder="New candidate"
          />
        </span>
      </div>
      <div className="flex flex-shrink-0 divide-x-2">
        <div className="w-full divide-y-2 border-slate-200">
          <ResponsibilityList />
        </div>
        <div className="w-full divide-y-2 border-slate-200">
          <CollaboratorList />
        </div>
      </div>
      <div className="flex divide-x-2 border-slate-200">
        <div className="w-full px-8 py-4">
          <NewResponsibilityBtn />
        </div>
        <div className="w-full px-8 py-4">
          <NewCollaboratorBtn />
        </div>
      </div>
      <div className="w-full px-8 py-4">
        <ConfirmBtn />
      </div>
    </div>
  )
}

export default NewCRCCard
