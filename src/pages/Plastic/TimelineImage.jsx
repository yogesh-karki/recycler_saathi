import React from 'react'

import './plastic.scss'
const TimelineImage = () => {
	const tlData = [
		{
			year: '1839 - 1856',
			title: 'INVENTION OF THE PRECURSORS',
			text: 'Natural Rubber, Vulcanite, Gutta- Percha, Shellac, and Bois Durci.'
		},
		{
			year: '1839 - 1894',
			title: 'BEGINNING OF THE PLASTIC ERA WITH SEMI-SYNTHETICS',
			text: 'Polystyrene or PS, Parkesine, Cellulose Nitrate or Celluloid, Polyvinyl Chloride or PVC, Viscose Rayon.',
		},
		{
			year: '1908-1939',
			title: 'THERMOSETTING PLASTICS AND THERMOPLASTICS',
			text: 'Cellophane, Phenol-Formaldehyde (trade name Bakelite), Vinyl or PVC, Ployvinylidene chloride or Saran, also called PVDC, Low-density polyethylene or LDPE, Acrylic or Polymethyl Methacrylate, Polyurethanes (trade name Igamid for plastic materials and Perlon for fibers), Polystyrene, Polytetrafluorethylene or PRFE (trade name Teflon), Nylon and Neoprene',
		},
		{
			year: '1941- 1985',
			title: 'POLYETHYLENE TEREPHTHALATE OR PET',
			text: 'Polyethylene Terephthalate or Pet, Low-Density Polyethylene, Unsaturated Polyester PET, High-density polyethylene or HDPE (trade name Marlex), Polypropylene or PP, Saran Wrap, Styrofoam, Polyimide, Thermoplastic Polyester, Linear Low-Density Polyethylene, Liquid Crystal Polymers',
		},
	]

  	return (
		<div className="dev_timeline">
			{
				tlData.map((val,index) => {
					return(
						<div className="tl_card" key={index}>
							<div className="date">
								<div className="big_circle"></div>
								<div className="small_circle"></div>
								<div className="line"></div>
								<h5>{val.year}</h5>
							</div>

							<div className="text">
								<h6>{val.title}</h6>
								<p>{val.text}</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default TimelineImage