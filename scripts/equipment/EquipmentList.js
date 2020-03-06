import { useEquipment } from "./equipmentDataProvider.js"
import { Equipment } from "./Equipment.js"

const contentElement = document.querySelector('.mainContainer')

export const RenderEquipmentList = () => {
  const equipmentData = useEquipment()
  equipmentData.forEach(equipmentPiece => contentElement.innerHTML += Equipment(equipmentPiece))
}