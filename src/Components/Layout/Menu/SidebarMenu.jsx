import { useState } from "react";
import { Link } from "react-router-dom";
import {
	Sidebar,
	Menu,
	MenuItem,
	SubMenu,
	useProSidebar,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faXmark,
	faHome,
	faEuro,
	faEnvelope,
	faBell,
	faBriefcase,
	faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";

function SidebarMenu() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const { open, defaultOpen, active, disabled } = useProSidebar();

	return (
		// <div className="top-0  fixed w-[400px] z-[1000] border-2 border-blue ">
		<div className="fixed w-0 top-0 z-50">
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className="fixed k float right-5 w-10 h-10 text-slate-light xs:top-6 sm:top-12 z-[500]  "
			>
				<FontAwesomeIcon
					icon={openSidebar ? faXmark : faBars}
					className=" text-second h-10 z-[1000] text-blue"
				/>
			</button>
			<Sidebar
				backgroundColor="var(--skyblue)"
				overlayColor="rgb(0, 0, 0, 0.9)"
				className={` fixed mr-10  h-screen text-blue font-bold z-[1000] transition-all  ease-in ${
					openSidebar
						? " fixed bg-blue h-[10vh] xs:left-[0]  "
						: " xs:h-screen fixed  xs:left-[-35rem]  "
				}`}
				// style={{
				// 	height: "100vh",
				// 	backgroundColor: "var(--skyblue)",
				// 	position: "fixed",
				// 	zIndex: 1000,
				// 	color: "var(--blue)",
				// }}
			>
				{/* <img
					className="pt-2 mb-5 ml-5"
					src="/attitudeLogo.svg"
					width={150}
					height={150}
					alt="logo"
				/> */}
				<Menu className="relative top-32">
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/" />}
					>
						<FontAwesomeIcon icon={faHome} className="mr-1" /> Accueil
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/le_centre" />}
					>
						{/* <img
							className=" absolute -top-[1.4rem] right-14"
							src="/attitudeLogo.svg"
							width={"5rem"}
							height={"5rem"}
							alt="logo"
						/> */}
						Le centre
					</MenuItem>
					<SubMenu label="nos services">
						<SubMenu
							className=" text-skyblue bg-blue"
							label="cryoth??rapie"
						>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/cryotherapie" />}
							>
								la cryoth??rapie
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/pour_qui" />}
							>
								Pour qui...
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/seanceCryo" />}
							>
								Comment se d??roule la s??ance
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/protocole" />}
							>
								Protocole
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/on_en_parle" />}
							>
								On en parle
							</MenuItem>
						</SubMenu>
						<SubMenu
							className="text-skyblue bg-blue"
							label="infrath??rapie"
						>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/infratherapie" />}
							>
								l'infratherapie
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/pour_qui" />}
							>
								Pour qui...
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/les_sportifs" />}
							>
								Les sportifs
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/seanceInfra" />}
							>
								Comment se d??roule la s??ance
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/firemen" />}
							>
								Les pompiers de NY
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/on_en_parle" />}
							>
								On en parle
							</MenuItem>
						</SubMenu>
						<SubMenu
							className="text-skyblue bg-blue "
							label="teslaFormer"
						>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/teslaFormer" />}
							>
								Tesla
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/pour_qui" />}
							>
								Pour qui...
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/seanceTesla" />}
							>
								comment se d??roule la s??ance
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/le_p??rin??e" />}
							>
								P??rin??e
							</MenuItem>
							<MenuItem
								className="bg-blue1"
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/on_en_parle" />}
							>
								On en parle
							</MenuItem>
						</SubMenu>
					</SubMenu>

					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/entreprise" />}
					>
						<FontAwesomeIcon icon={faBriefcase} className="mr-2" />
						entreprises
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/tarifs" />}
					>
						<FontAwesomeIcon icon={faEuro} className="mr-2" />
						tarifs
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/contact" />}
					>
						<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
						contact
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/evenement" />}
					>
						<FontAwesomeIcon icon={faBell} className="mr-2" />
						??v??nements
					</MenuItem>
				</Menu>
			</Sidebar>
		</div>
		// </div>
	);
}
export default SidebarMenu;
