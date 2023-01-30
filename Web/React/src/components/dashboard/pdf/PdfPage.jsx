import { jsPDF } from "jspdf";
import { useEffect, useMemo, useRef, useState } from "react";
import Input from "../../reusable/Input";
import './styles.scss';

export default () => {
  const pdf = new jsPDF({
    format: [1024, 720], // por defecto es A4 si se limina esta propiedad
    orientation: 'p',
    unit: 'mm',
  });
  pdf.setFontSize(10)

  const element = useRef(null);
  const [preview, setPreview] = useState(null);
  
  useEffect(() => {
    if (element.current) {
      pdf.html(element.current, {
        callback: (pdf) => {
          setPreview(pdf.output('datauristring'));
        },
        x: 0,
        y: 0,
      })
    }
  }, [element])

  const download = () => {
    pdf.html(element.current, {
      callback: (pdf) => {
        pdf.save('archivo.pdf');
      },
      x: 0,
      y: 0,
    })
  }


  return (
    <div className="pdf-page">
      <h1>HTML a PDF</h1>
      <div className="container">
        <button onClick={download}>Descargar</button>

        <div className="row">
          <div className="left">
            <div ref={element} style={{backgroundColor: "#ddd", padding: '20px', maxWidth:'1024px', width: '100%'}}>
              <div style={{color: 'red'}}>Hello world!</div>
              <div style={{color: 'blue'}}>Esta es una prueba de PDF, documento 1024x720</div>
            </div>
          </div>
          <div className="rigth">
            <iframe src={preview} frameborder="0" width={'100%'} height={'500px'}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}