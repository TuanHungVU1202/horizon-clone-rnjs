import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

function Home() {
    const loggedIn = { firstName: "Right", lastName: "Not Left", email: "xyz@icloud.com" };

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={9999.123}
                    />
                </header>
            </div>

            <RightSidebar
                user={loggedIn}
                transacetions={[]}
                banks={[{ currentBalance: 1234.432 }, { currentBalance: 5678.901 }]}
            />
        </section>
    )
}

export default Home