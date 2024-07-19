import React from 'react'
import Container from '../../components/Container'
import InputField from './InputField'
import { inputs } from '../../constants'
import { useMutation } from '@tanstack/react-query'
import { addPlace } from '../../api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Create = () => {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationKey: ["addPlace"],
    mutationFn: (data) => addPlace(data),
    onSuccess: () => {
      toast.success("Kayıt başarılı..")
      navigate("/")
    },
    onError: () => {
      toast.error("İşlem başarısız !!!")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    let data = Object.fromEntries(formData.entries())
    data.availability = data.availability ? true : false
    data.amenities = data.amenities.split(",")
    //data.id = Math.floor(Math.random()*1000)
    console.log(data)
    mutation.mutate(data)
  }


  return (
    <Container>
      <form onSubmit={handleSubmit} className='flex flex-col gap-8 max-w-96 m-auto'>
        {
          // inputları oluşturduk
          inputs.map((props, i) => <InputField key={i} {...props} />)
        }
        <button disabled={mutation.isPending} className='bg-blue-500 py-2 px-6 mt-5 text-white rounded-md font-semibold transition hover:bg-blue-600 disabled:bg-blue-300'>Oluştur</button>
      </form >
    </Container>
  )
}

export default Create
