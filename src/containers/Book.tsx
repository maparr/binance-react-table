import React from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const SOCKET_WSS = 'wss://stream.binance.com:9443/ws/btcusdt@depth20';


export const Book = () => {
    const { lastJsonMessage, readyState } = useWebSocket(SOCKET_WSS, {shouldReconnect: () => true})
    const isConnected = readyState === ReadyState.OPEN

    return (
            <div style={{display: 'flex'}}>
                <div>
                    <h2>Bids</h2>
                    <table className="styled-table">
                        <thead>
                        <tr>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                        </thead>
                        <tbody>
                        {isConnected && (lastJsonMessage?.bids || []).map(([price, qty]: any) => {
                            return (
                                <tr>
                                    <td>{qty}</td>
                                    <td>{price}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2>Asks</h2>
                    <table className="styled-table">
                        <thead>
                        <tr>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                        </thead>
                        <tbody>
                        {isConnected && (lastJsonMessage?.asks || []).map(([price, qty]: any) => {
                            return (
                                <tr>
                                    <td>{qty}</td>
                                    <td>{price}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>

            </div>

    )
}
