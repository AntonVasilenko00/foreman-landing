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
			const response = { status: 200 } //await axios.post('https://formspree.io/f/mnqkpodd', data)
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
			toast('Не удалось отправить форму. Пожалуйста, попробуйте позже.', {
				type: 'error',
				position: 'bottom-right',
			})
		}
		handleFormSubmit && handleFormSubmit()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-4 w-full'>
			<label>
				Ваш номер телефона:
				<PhoneInputWithCountry
					value={getValues('phone')}
					name='phone'
					control={control}
					rules={{
						required: 'Пожалуйста, введите ваш номер телефона',
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
			<label className='flex flex-col'>
				Ваш email (опционально):
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
			<label className='flex flex-col'>
				Ваше сообщение:
				<textarea
					{...register('message', { required: true })}
					placeholder='Сколько будет стоить косметический ремонт в двушке 45 квадратов?'
					className='border p-2 rounded'
				/>
			</label>
			<button
				type='submit'
				className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 animate-pulse hover:animate-none focus:animate-none'>
				Отправить
			</button>
		</form>
	)
}

export default ContactForm
