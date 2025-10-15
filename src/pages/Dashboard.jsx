import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { summaryCards } from '../data/Data'
import SalesChart from './../components/charts/SalesChart';
import GrowthChart from './../components/charts/GrowthChart';
import ActiveUsersChart from '../components/charts/ActiveUsersChart';
import RecentOrdersTable from '../components/RecentOrdersTable';

const Dashboard = () => {
  return (
    <div className='dashboard-page-container'>
      <Container fluid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="dashboard-head">
              <h2>Dashboard</h2>
              <p>Welcome to your admin dashboard</p>
            </div>
          </Col>
        </Row>
        <Row>
          {summaryCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Col lg={3} md={6} sm={6} xs={12} key={index}>
                <div className="summary-card">
                  <div className="card-icon">
                    <Icon size={32} />
                  </div>
                  <div className="card-info">
                    <div className="dashboard-card-text">
                      <h4>{card.title}</h4>
                      <h2>{card.value}</h2>
                    </div>
                    <span className={`${card.trend === "up" ? "trendup-color" : "trenddown-color"}`}>{card.change}</span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col lg={8} md={12} sm={12} xs={12}>
            <div className="sales-analytics">
              <SalesChart />
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12}>
            <div className="sales-analytics">
              <GrowthChart />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <div className="sales-analytics">
              <ActiveUsersChart />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <div className="recent-orders">
              <RecentOrdersTable />
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col lg={6} md={12}>
            <TopProducts />
          </Col>
          <Col lg={6} md={12}>
            <Notifications />
          </Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default Dashboard