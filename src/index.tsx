import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

import 'tippy.js/dist/tippy.css';
import { ToastProvider } from './components/common/toasts';
import { RouteWrapper } from './components/layouts/RouteWrapper';
import { AirdropPage } from './pages/airdrop';
import { AssetsPage } from './pages/assets';
import { BootstrapPage } from './pages/bootstrap';
import { GovernancePage } from './pages/governance';
import { GovernanceDetailsPage } from './pages/governance/[id]/GovernanceDetailsPage';
import { MainPage } from './pages/main';
import { NotFoundPage } from './pages/NotFound';
import { PoolPage } from './pages/pool';
import { PoolsPage } from './pages/pools';
import { StoreProvider } from './stores';
import './styles/globals.scss';
import './styles/index.scss';
import { Terms } from './terms';

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(utc);

const queryClient = new QueryClient();

const Router: FunctionComponent = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<StoreProvider>
					<ToastProvider>
						<Terms />
						<div style={{ minWidth: '1280px' }} className="min-h-sidebar-minHeight h-screen bg-background z-0">
							<BrowserRouter>
								<Switch>
									<Route exact path="/">
										<RouteWrapper>
											<MainPage />
										</RouteWrapper>
									</Route>
									<Route exact path="/pools">
										<RouteWrapper>
											<PoolsPage />
										</RouteWrapper>
									</Route>
									<Route path="/pool/:id">
										<RouteWrapper>
											<PoolPage />
										</RouteWrapper>
									</Route>
									<Route exact path="/assets">
										<RouteWrapper>
											<AssetsPage />
										</RouteWrapper>
									</Route>
									<Route exact path="/governance">
										<RouteWrapper>
											<GovernancePage />
										</RouteWrapper>
									</Route>
									<Route exact path="/governance/:id">
										<RouteWrapper>
											<GovernanceDetailsPage />
										</RouteWrapper>
									</Route>
									<Route exact path="/airdrop">
										<RouteWrapper>
											<AirdropPage />
										</RouteWrapper>
									</Route>
									<Route exact path={'/bootstrap'}>
										<RouteWrapper>
											<BootstrapPage />
										</RouteWrapper>
									</Route>
									<Route>
										<RouteWrapper>
											<NotFoundPage />
										</RouteWrapper>
									</Route>
								</Switch>
							</BrowserRouter>
						</div>
						<ToastContainer transition={Bounce} />
					</ToastProvider>
				</StoreProvider>
			</RecoilRoot>
		</QueryClientProvider>
	);
};

ReactDOM.render(<Router />, document.getElementById('app'));
