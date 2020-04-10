function Touching(Star, Planet)
{
  if(Star.body.position.x - Planet.body.position.x < (Star.width + Planet.width)/2
  && Planet.body.position.x - Star.body.position.x < (Star.width + Planet.width)/2
  && Star.body.position.y - Planet.body.position.y < (Star.height + Planet.height)/2
  && Planet.body.position.y - Star.body.position.y < (Star.height + Planet.height)/2)
  {
      Planet.body.position.x = 20000;
      Planet.body.position.y = 20000;
  }
}