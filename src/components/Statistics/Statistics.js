import React from 'react'

function Statistics ({title, stats}){
    return (
<section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
  {stats.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
  </ul>
</section>
    )
}
export default Statistics;