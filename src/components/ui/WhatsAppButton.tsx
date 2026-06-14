import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { COMPANY } from '../../constants/data'

const BASE = '/Topoconcret'

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber={COMPANY.phoneRaw}
      accountName={COMPANY.shortName}
      avatar={`${BASE}/logo-dark.svg`}
      statusMessage="Disponible · Responde en minutos"
      chatMessage={`Hola 👋 Bienvenido a ${COMPANY.shortName}. ¿En qué podemos ayudarle?`}
      placeholder="Escriba su consulta aquí..."
      messageDelay={1.5}
      notification={true}
      notificationDelay={30}
      notificationSound={true}
      allowClickAway={true}
      darkMode={false}
    />
  )
}
