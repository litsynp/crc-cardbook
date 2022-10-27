import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import CircleButton from '../common/circle-button'
import CollaboratorList from './collaborator-list'
import ResponsibilityList from './responsibility-list'
import { CRCCardType } from './types'

const CONFIRM_BG_COLOR = 'rgb(23 165 137)'

const NewResponsibilityBtn = ({
  addEmptyResponsibility,
}: {
  addEmptyResponsibility: () => void
}) => <CircleButton text="+" onClick={addEmptyResponsibility} />

const NewCollaboratorBtn = ({
  addEmptyCollaborator,
}: {
  addEmptyCollaborator: () => void
}) => <CircleButton text="+" onClick={addEmptyCollaborator} />

const ConfirmButton = ({
  card,
  onConfirm,
}: {
  card: CRCCardType
  onConfirm: (card: CRCCardType) => void
}) => (
  <CircleButton
    backgroundColor={CONFIRM_BG_COLOR}
    text="V"
    onClick={() => onConfirm(card)}
  />
)

const NewCRCCard = ({
  onConfirm,
}: {
  onConfirm: (card: CRCCardType) => void
}) => {
  const [candidate, setCandidate] = useState('')
  const [responsibilities, setResponsibilities] = useState<string[]>([])
  const [collaborators, setCollaborators] = useState<string[]>([])

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
          <ResponsibilityList
            responsibilities={responsibilities}
            onChange={(e, index) => {
              setResponsibilities(
                responsibilities.map((c, i) => {
                  if (i === index) {
                    return e.target.value
                  }
                  return c
                }),
              )
            }}
            onClickRemoveBtn={(index) =>
              setResponsibilities(
                responsibilities.filter((_, i) => i !== index),
              )
            }
          />
        </div>
        <div className="w-full divide-y-2 border-slate-200">
          <CollaboratorList
            collaborators={collaborators}
            onChange={(e, index) =>
              setCollaborators(
                collaborators.map((c, i) => {
                  if (i === index) {
                    return e.target.value
                  }
                  return c
                }),
              )
            }
            onClickRemoveBtn={(index) => {
              setCollaborators(collaborators.filter((_, i) => i !== index))
            }}
          />
        </div>
      </div>
      <div className="flex divide-x-2 border-slate-200">
        <div className="w-full px-8 py-4">
          <NewResponsibilityBtn
            addEmptyResponsibility={() =>
              setResponsibilities(responsibilities.concat(''))
            }
          />
        </div>
        <div className="w-full px-8 py-4">
          <NewCollaboratorBtn
            addEmptyCollaborator={() =>
              setCollaborators(collaborators.concat(''))
            }
          />
        </div>
      </div>
      <div className="w-full px-8 py-4">
        <ConfirmButton
          card={{
            id: uuidv4(),
            candidate,
            responsibilities,
            collaborators,
          }}
          onConfirm={onConfirm}
        />
      </div>
    </div>
  )
}

export default NewCRCCard
