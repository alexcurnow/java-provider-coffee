export const Equipment = equipmentObject => {
  return `
  <section class="equipment">
    <h4>${equipmentObject.model}</h4>
      <ul>
        <li>Serial no.: ${equipmentObject.serialNumber}</li>
        <li>Is it functioning? ${equipmentObject.isFunctional}</li>
        <li>Is it under warranty? ${equipmentObject.isUnderWarranty}</li>
      </ul>
  </section>
  `
}