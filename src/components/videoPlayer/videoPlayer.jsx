import './videoPlayer.css'
import video from '#/video.svg'



export default function VideoPlayer() {
  return (
    <div className='videoPlayer'>
        <p>Об акселерационной программе</p>
        <img src={video} alt="" />
    </div>
  )
}
