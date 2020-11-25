import React from 'react'
import Carolina1 from '../../img/speeddate/Carolina1.jpg'
import Carolina2 from '../../img/speeddate/Carolina2.jpg'
import Carolina3 from '../../img/speeddate/Carolina3.jpg'
import Carolina4 from '../../img/speeddate/Carolina4.jpg'
import Chelsey1 from '../../img/speeddate/Chelsey1.jpg'
import Chelsey2 from '../../img/speeddate/Chelsey2.jpg'
import Chelsey3 from '../../img/speeddate/Chelsey3.jpg'
import Chelsey4 from '../../img/speeddate/Chelsey4.jpg'
import Chelsey5 from '../../img/speeddate/Chelsey5.jpg'
import Mathieu1 from '../../img/speeddate/Mathieu1.jpg'
import Mathieu2 from '../../img/speeddate/Mathieu2.jpg'
import Mathieu3 from '../../img/speeddate/Mathieu3.jpg'
import Mathieu4 from '../../img/speeddate/Mathieu4.jpg'
import Mathieu5 from '../../img/speeddate/Mathieu5.jpg'
import DateItem from './DateItem'

const SpeedDate = (props) => {
  const CarolinaSet = [Carolina1, Carolina2, Carolina3, Carolina4];
  const ChelseySet = [Chelsey1, Chelsey2, Chelsey3, Chelsey4, Chelsey5];
  const MathieuSet = [Mathieu1, Mathieu2, Mathieu3, Mathieu4, Mathieu5];

  return (
    <section id="speeddate">
      {/* FIRST ROW */}
      <DateItem name="Carolina" age={19} location="35, M.Streight, Chicago, IL" images={CarolinaSet} />
      {/* SECOND ROW */}
      <DateItem name="Chelsey" age={21} location="35, M.Streight, Chicago, IL" images={ChelseySet} />
      {/* THIRD ROW */}
      <DateItem name="Mathieu" age={23} location="35, M.Streight, Chicago, IL" images={MathieuSet} />
    </section>
  )
}

export default SpeedDate;


