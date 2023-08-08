import Image from "next/legacy/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description='Sobre nosotros GuitarLA, tienda de música'>
        
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
            <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros'/>
            <div>
              <p>lorem dhusalhdjklawbcjnaklwbdjlkwabdjkwabjkdjñwabdjñkwañ</p>
              <p>lorem dhusalhdjklawbcjnaklwbdjlkwabdjkwabjkdjñwabdjñkwañ</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
