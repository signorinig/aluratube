import config from "../config.json"
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorite } from "../src/components/Favorite";

const playlistStyle = { display: "flex", flexDirection: "column", flex: 1,} ;

function HomePage() {
	return (
		<>
			<CSSReset />
			<div style={playlistStyle}> 
				<Menu></Menu>
				<Header> </Header>
				<Timeline playlists={config.playlists}>  </Timeline>
				<Favorites favorites={config.favorites}> </Favorites>
			</div>
		</>
	);
  }

  export default HomePage

  /*function Menu() {
	return (
		<div>
			Menu
		</div>
	)
  }*/

  const StyledHeader = styled.div`
	img{
		width: 80px;
		height: 80px;
		border-radius: 50%;
	} 
	.user-info{
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	}
	.banner-head img{
		width: 100%;
		border-radius: unset;
		height: auto;
	}
	.banner-head {
		max-height: 300px;
		overflow: hidden;
	}
  `;

  function Header() {
	return (
		<StyledHeader>
			<div className="banner-head">
				<img alt="Banner" src={config.banner}></img>
			</div>
			<section className="user-info">
				<img alt="Imagem de Perfil" src={`https://github.com/${config.github}.png`}></img>
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
				</div>
			</section>
		</StyledHeader>
	)
  }
  
  function Timeline(props) { 
	const playlistNames = Object.keys(props.playlists)
	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = props.playlists[playlistName];
				return (
					<section>
						<h2>{playlistName}</h2>
						<div>
							{videos.map((video) => {
								return (
									<a href={video.url}>
										<img src={video.thumb} />
										<span>
											{video.title}
										</span>
									</a>
								)
							})}
						</div>
					</section>
				)
			})}
			
		</StyledTimeline>
	)
  }
  
  function Favorites(props){
	const userFavorites = Object.keys(props.favorites)
	return (
		<StyledFavorite>
			{userFavorites.map((userFavorite) => {
				const users = props.favorites[userFavorite];
				return (
					<section>
						<h2>{userFavorite}</h2>
						<div>
							{users.map((user) => {
								return (
									<a> 
									<img src={user.thumb} />
										<span>
											{user.insta}
										</span>
									</a>
								)
							})}
						</div>
					</section>
				)
			})}
		</StyledFavorite>
	)
  }