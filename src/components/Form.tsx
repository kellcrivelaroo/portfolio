'use client'

import { ChevronRight, Loader2, Check, X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

export default function Form() {
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function sendEmail(data: any) {
    const params = {
      to_name: 'Kell',
      from_name: data.nome,
      email: data.email,
      subject: data.assunto,
      message: data.mensagem,
    }

    setSending(true)

    await emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        params,
        process.env.NEXT_PUBLIC_KEY as string,
      )
      .then(
        (response) => {
          console.log('E-mail enviado:', response.status, response.text)
          setSending(false)
          setSuccess(true)
        },
        (error) => {
          console.log('Erro: ', error)
          setSending(false)
          setFail(true)
        },
      )
  }

  return (
    <form
      className="flex flex-col gap-4 pt-4"
      onSubmit={handleSubmit(sendEmail)}
    >
      <input
        {...register('nome', { required: true })}
        placeholder="Nome"
        autoComplete="off"
      />
      {errors.nome?.type === 'required' && (
        <p role="alert" className="-my-2 pl-2 text-sm leading-none text-rosa">
          Por favor, digite seu nome.
        </p>
      )}
      <input
        {...register('email', {
          required: 'Por favor, digite seu e-mail.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'E-mail inválido.',
          },
        })}
        placeholder="E-mail"
        autoComplete="off"
      />
      {errors.email && (
        <p role="alert" className="-my-2 pl-2 text-sm leading-none text-rosa">
          {errors.email.message as string}
        </p>
      )}
      <input
        {...register('assunto', { required: true })}
        placeholder="Assunto"
        autoComplete="off"
      />
      {errors.assunto?.type === 'required' && (
        <p role="alert" className="-my-2 pl-2 text-sm leading-none text-rosa">
          Qual é o motivo do contato?
        </p>
      )}
      <textarea
        {...register('mensagem', { required: true })}
        placeholder="Mensagem"
        autoComplete="off"
        className="h-40 resize-none pt-3"
      />
      {errors.mensagem?.type === 'required' && (
        <p role="alert" className="-mt-2 pl-2 text-sm leading-none text-rosa">
          Sobre o que gostaria de conversar?
        </p>
      )}
      <button
        type="submit"
        className="my-button flex w-fit items-end gap-2 self-center border border-azul-200/10 px-6 py-1.5 font-alt hover:text-white
              hover:brightness-110 disabled:opacity-60 disabled:hover:shadow-none lg:self-auto"
        disabled={sending || success || fail}
      >
        <span className="pl-2 text-base">Enviar mensagem</span>
        {sending && <Loader2 className="animate-spin" />}
        {success && <Check />}
        {fail && <X />}
        {!sending && !success && !fail && <ChevronRight width={20} />}
      </button>
      {success && (
        <span role="alert" className="-mt-1 pl-4 leading-tight text-rosa">
          Mensagem enviada com sucesso!
          <br />
          Entrarei em contato muito em breve.
        </span>
      )}
      {fail && (
        <span role="alert" className="-mt-1 pl-4 leading-tight text-rosa">
          {`Ocorreu um erro no envio :(`}
          <br />
          Por favor tente contato via WhatsApp.
        </span>
      )}
    </form>
  )
}
