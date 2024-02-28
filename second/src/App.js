import Child from "./Child"
function App()
{
  let img1= <img src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABZlEvcVlfZFd3gCloBnNJbbk1GKfoAUaCh0If4M9olDik-aqBSZEkkHuFjwF6BKx5c92b6frTlSaVGbnpagSruheEksPqgyneP86hxsbDMhR04G5hll1H66jtc71AB6wUkFlTathAVCjtgeg4oTjaoWFNME6x3xeNz7POW48zIvemOMpT98hWMKRh6-IYTtQ8dYBTZHhHl-pjQzeUvZA2lrZ-2HiHgsMY4fIzvZyzKIWiGAYtV9bH3yeV5TTzPWGyhhJO-vYGPVnE7y2EZGQb7floQ.jpg?r=b94"/>
  let image1name="AngryBird";
  let img2=<img src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABRNlZnJnMiM9DO9WBJeMgrojLppOZGHtXAn95Zy_V1NE7ewpTTnp5GjIl6NRfmJ5tetc0mL_qIDWmcj4ntxIWbPSJTGMwIm6UWA.jpg?r=7d5"/>
  let image2name="Minions";
 return(
  <div>
    <Child aa={img1} image1name={image1name} cc={img2} image2name={image2name}/>
  </div>

  )

}
export default App;
