import StarIcon from '@mui/icons-material/Star'
import { Box, Rating } from '@mui/material'
import { PencilLine } from 'phosphor-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Comment } from '../components/Comment'
import { Header } from '../components/Header'
import { TextButton } from '../components/textButton'

const labels = {
  0.5: 'Horrivel',
  1: 'Horrivel+',
  1.5: 'Ruim',
  2: 'Ruim+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Bom',
  4: 'Bom+',
  4.5: 'Excelente',
  5: 'Excelente+',
}

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}

export function Feed() {
  const [value, setValue] = React.useState(4)
  const [hover, setHover] = React.useState(-1)
  const navigate = useNavigate()

  return (
    <div className="h-full w-full bg-BG-900">
      <Header />

      <main className="relative grid h-hv-calc w-full p-16">
        <div className="absolute left-4 top-4">
          <TextButton title={'< Voltar'} istext onClick={() => navigate(-1)} />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-5">
            <h1 className="text-3xl text-gray-200">Cadastrar comentário</h1>
            <Button
              title={'Adicionar'}
              icon={PencilLine}
              isAdd
              onClick={() => navigate('/comment/:movie_id')}
            />
          </div>
          <div className="mt-6 flex justify-between gap-32">
            <section className="flex h-hv-section w-full flex-col gap-6 overflow-y-auto">
              <Comment
                user={'gabrielSantos1101'}
                value={`
                Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.
                  `}
              />
            </section>
            <aside className="flex w-full min-w-[225px] flex-col gap-9">
              <div className="flex items-start gap-8">
                <img
                  className="w-64 rounded-xl"
                  src="https://cinema10.com.br/upload/filmes/filmes_12336_tita.jpg"
                  alt="imagem do filme titanic"
                />
                <div>
                  <h1 className="text-4xl text-white">Fime: Titanic</h1>
                  <Box
                    sx={{
                      width: 200,
                      display: 'flex',
                      marginInline: 'auto',
                      marginTop: '1.375rem',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      readOnly
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(e, newValue) => {
                        setValue(newValue)
                      }}
                      onChangeActive={(e, newHover) => {
                        setHover(newHover)
                      }}
                      emptyIcon={
                        <StarIcon
                          className="text-gray-900"
                          sx={{ fontSize: '2rem' }}
                        />
                      }
                      sx={{ fontSize: '2rem' }}
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }} className="text-gray-400">
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Box>
                </div>
              </div>
              <div>
                <p className="flex flex-col gap-4 ">
                  <span>Sinopse:</span>
                  Adipisicing et in cillum eu adipisicing do in. Ad labore
                  nostrud occa ecat nisi ea qui consequat voluptate sunt nulla
                  sunt. Lorem eu pariatur excepteur anim ut consectetur. Ipsum
                  amet deserunt ... ver mais
                  <span>Ana: 1997</span>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
