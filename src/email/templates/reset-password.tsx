import {
	Body,
	Button,
	Container,
	Head,
	Html,
	Link,
	Preview,
	Section,
	Text
} from '@react-email/components'

interface Props {
	url: string
	appName?: string
}

export default function ResetPasswordEmail({
	url,
	appName = 'Your app'
}: Props) {
	return (
		<Html>
			<Head />
			<Preview>Сброс пароля</Preview>
			<Body style={body}>
				<Container style={container}>
					<Section>
						<Text style={heading}>Сброс пароля</Text>

						<Text style={text}>
							Вы запросили восстановление пароля в {appName}
						</Text>

						<Text style={text}>
							Если это были не вы - проигнорируйте это письмо.
						</Text>

						<Section style={buttonContainer}>
							<Button href={url} style={button}>
								Задать новый пароль
							</Button>
						</Section>

						<Text style={textSmall}>Или скопируйте ссылку:</Text>

						<Link href={url} style={link}>
							{url}
						</Link>
					</Section>
				</Container>
			</Body>
		</Html>
	)
}

const body = {
	backgroundColor: '#f6f9fc',
	fontFamily: 'Arial, sans-serif'
}

const container = {
	backgroundColor: '#ffffff',
	margin: '0 auto',
	padding: '40px 24px',
	borderRadius: '8px',
	maxWidth: '480px'
}

const heading = {
	fontSize: '20px',
	fontWeight: '600',
	marginBottom: '16px'
}

const text = {
	fontSize: '14px',
	luneHeight: '22px',
	marginBottom: '12px'
}

const buttonContainer = {
	textAlign: 'center' as const,
	margin: '24px 0'
}

const button = {
	backgroundColor: '#dc2626',
	color: '#ffffff',
	padding: '12px 20px',
	borderRadius: '6px',
	textDecoration: 'none',
	fontSize: '14px'
}

const link = {
	fontSize: '12px',
	color: '#2563eb',
	wordBreak: 'break-all' as const
}

const textSmall = {
	fontSize: '12px',
	marginBottom: '8px'
}
