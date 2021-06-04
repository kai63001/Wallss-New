
const ImagePage = ({raw}) => {
    return raw
}

export async function getServerSideProps({ params, req }) {
    const data = await fetch('https://getwallpapers.com/wallpaper/full/1/c/e/6459.jpg')
    const raw = await data.text()
    return { props: { raw } };
    // return
  }

export default ImagePage