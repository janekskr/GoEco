import { Slide } from "react-awesome-reveal"
import { InformationSectionItem } from "."

const InformationSection = () => {
  return (
    <div className="flex flex-col gap-20 items-center w-[80%] md:w-[65%] mx-auto mt-7"> 
          <Slide className="overflow-hidden rounded-[40px] shadow-2xl" delay={100}>
            <InformationSectionItem 
                title="Czemu powinno cię to obchodzić zanieczyszczenie powietrza?"
                content="Wiele osób cierpi z powodu zanieczyszczenia powietrza, nie zdając sobie z tego sprawy. Ty możesz być jedną z nich! Duża część ludzkości nie rozumie powagi tej sytuacji. 7 milionów - taka jest liczba osób, które zmarły PRZEDWCZEŚNIE z powodu zanieczyszczenia powietrza i jego skutków. Jest również bardzo możliwe, że kontaminacja powietrza przyczyniła się do śmierci wielu starszych osób. Objawy wywoływane przez zanieczyszczenie powietrza są często bagatelizowane. To błąd, ponieważ w dłużeszej perspektywie czasu mogą prowadzić do ciękich chorób takich jak: rak płuc, udar, choroby serca, ostre i przewlekłe choroby układu oddechowego. Z tego powodu tak ważne jest więc dbanie o to zby nasze powietrze było czyste. Dbając o czyste powietrze, dbamy o swoje zdrowie."
            />
          </Slide>
          <Slide className="overflow-hidden rounded-[40px] shadow-2xl" direction="right" delay={100}>
            <InformationSectionItem
                title="Co możesz zrobić, żeby zwalczyć zanieczyszczenie powietrza?"
                content="Jeżeli chodzi o zwalczanie zanieczyszczenia powietrza, to najlepszą rzeczą jaką możesz zrobić to poinformować innych o problemie, sprzeciwiać się wycince roślin usuwających CO2 i wspierać fundacje, które sadzą więcej roślinności. Mimo, że zwalczanie obecnego zanieczyszczenia jest bardzo potrzebne jest to jedynie pół problemu - trzeba również zwalczyć źródła kontaminacji powietrza. Ważne jest pamiętać, że choć pojedynczy człowiek może niewiele, to grupy osób mogą zdziałać dużo więcej. Do rzeczy, które możesz zrobić należą: zmiana formy transportu - najlepiej zastąpić jazdę autem na rzecz pociągu, autobusu, roweru lub zwykłego spaceru (jeśli jest to niemożliwe to zmiana auta na hybrydowe lub elektryczne jest krokiem w dobrą stronę), możesz także rozważyć ogrzewanie domowe na elektryczne lub gazowe."
            />
          </Slide>
      </div>
  )
}

export default InformationSection