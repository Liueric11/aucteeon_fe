import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Example</small>
          </CCardHeader>
          <CCardBody>
            <CCard style={{ width: '18rem' }}>
              <CCardImage orientation="top" src={ReactImg} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up the bulk of the
                  card&#39;s content.
                </CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Images</small>
          </CCardHeader>
          <CCardBody>
            <CCard style={{ width: '18rem' }}>
              <CCardImage orientation="top" src={ReactImg} />
              <CCardBody>
                <CCardText>
                  Some quick example text to build on the card title and make up the bulk of the
                  card&#39;s content.
                </CCardText>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
