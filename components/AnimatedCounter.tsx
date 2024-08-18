'use client'

import CountUp from "react-countup/"

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        prefix="EUR "
        decimal="."
        decimals={3}
      />
    </div>
  )
}

export default AnimatedCounter