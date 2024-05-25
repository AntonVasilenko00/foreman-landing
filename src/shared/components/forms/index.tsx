import axios from 'axios'
import { HTMLProps } from 'react'
import { useForm } from 'react-hook-form'
import ru from 'react-phone-number-input/locale/ru.json'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { toast } from 'react-toastify'

interface ContactFormProps extends HTMLProps<HTMLFormElement> {
	handleSuccess?: () => void
	handleFailure?: () => void
	handleFormSubmit?: () => void
}

interface FormData {
	phone: string
	name: string
	email: string
	message: string
}

const ContactForm: React.FC<ContactFormProps> = ({
	handleSuccess,
	handleFailure,
	handleFormSubmit,

	...props
}) => {
	const {
		getValues,
		resetField,
		control,
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>()

	const onSubmit = async (data: FormData) => {
		try {
			const response = await axios.post('/api/telegram', data)
			if (response.status === 200) {
				toast('Форма успешно отправлена! Скоро с вами свяжемся.', {
					type: 'success',
					position: 'bottom-right',
				})
				handleSuccess && handleSuccess()
				resetField('message')
			} else {
				handleFailure && handleFailure()
				toast('Не удалось отправить форму. Пожалуйста, попробуйте позже.', {
					type: 'error',
					position: 'bottom-right',
				})
			}
		} catch (error) {
			console.log(error)
			toast('Не удалось отправить форму. Пожалуйста, попробуйте позже.', {
				type: 'error',
				position: 'bottom-right',
			})
		}
		handleFormSubmit && handleFormSubmit()
	}

	return (
		<form
			autoComplete='on'
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-4 md:gap-6 lg:gap-8 w-full'>
			<label className='flex flex-col gap-2'>
				Ваше имя:
				<input
					{...register('name', {
						required: 'Пожалуйста, введите Ваше имя',
					})}
					className='border p-2 rounded'
				/>
				{errors.name && <p className='text-red-500'>{errors.name.message}</p>}
			</label>
			<label className='flex flex-col gap-2'>
				Ваш номер телефона:
				<PhoneInputWithCountry
					value={getValues('phone')}
					name='phone'
					control={control}
					rules={{
						required: 'Пожалуйста, введите Ваш номер телефона',
						minLength: {
							value: 11,
							message: 'Номер телефона должен содержать минимум 11 символов',
						},
					}}
					labels={ru}
					defaultCountry='RU'
					international
					withCountryCallingCode
					className='border p-4 rounded'
				/>
				{errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
			</label>
			<label className='flex flex-col gap-2'>
				Ваш email (необязательно):
				<input
					{...register('email', {
						required: false,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Неправильный формат адресса',
						},
					})}
					className='border p-2 rounded'
				/>
				{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
			</label>
			<label className='flex flex-col gap-2'>
				Ваше сообщение:
				<textarea
					{...register('message', { required: true })}
					className='border md:min-h-[12rem] p-2 rounded placeholder:text-xs sm:placeholder:text-md md:placeholder:text-lg'
				/>
			</label>
			<button
				type='submit'
				className='focus:outline-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 animate-pulse hover:animate-none focus:animate-none'>
				Отправить
			</button>
		</form>
	)
}

export default ContactForm
