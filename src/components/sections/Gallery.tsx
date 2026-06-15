const BASE = '/Topoconcret'

const PHOTOS = [
  { src: 'images/originals/gallery-6.png', alt: 'Inspección con ultrasonido en baño' },
  { src: 'images/originals/section-3.png', alt: 'Cámara térmica detectando humedad' },
  { src: 'images/originals/section-2.png', alt: 'Inspección ultrasonido en exterior' },
  { src: 'images/originals/gallery-1.png', alt: 'Análisis térmico en pared húmeda' },
  { src: 'images/originals/section-4.png', alt: 'Reparación de tuberías' },
  { src: 'images/originals/gallery-4.png', alt: 'Inspección en estacionamiento' },
]

export default function Gallery() {
  return (
    <section className="py-4 bg-white">
      <div className="grid grid-cols-3 gap-1">
        {PHOTOS.map((photo, i) => (
          <div key={i} className="overflow-hidden aspect-video">
            <img
              src={`${BASE}/${photo.src}`}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
