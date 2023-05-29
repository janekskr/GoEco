import { NextResponse } from "next/server";

interface Delivery {
    distance: number, // km
    mass: number, // kq
}
interface Device { // not only devices
    name: string, // h
    value: number, // kWh or CO2e
}

interface ApiRequest {
    home: {
        coal: number, // kg
        charcoal: number, // kg
        hot_water: number, // m3
        gas: number, // dm3
    },
    electricity: Device[],
    deliveries: Delivery[],
    //transport: TODO
}

interface ApiResponse {
    home: {
        coal: number,
        charcoal: number,
        hot_water: number,
        gas: number,
    },
    electricity: Device[],
    deliveries: number,
    //transport: TODO
}

export async function POST(request: Request) {
    const json = await request.json()
    const apiRequest = json as ApiRequest

    const response: ApiResponse = {
        home: {
            coal: apiRequest.home.coal * 1.5,
            charcoal: apiRequest.home.charcoal * 1.5,
            hot_water: apiRequest.home.hot_water * 1.5,
            gas: apiRequest.home.gas * 1.5,
        },
        electricity: computeElectricity(apiRequest.electricity),
        deliveries: computeDeliveries(apiRequest.deliveries),
    }

    return NextResponse.json(response);
}

function computeElectricity(devices: Device[]) {
    for (let device of devices) {
        device.value *= 1.5;
    }
    return devices
}

function computeDeliveries(deliveries: Delivery[]) {
    let co2 = 0
    for (let delivery of deliveries) {
        co2 += delivery.mass * 1.5
    }
    return co2
}