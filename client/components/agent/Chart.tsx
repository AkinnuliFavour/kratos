"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartData {
  date: string;
  value: number;
}

interface TooltipData {
  inquires: number;
  payments: number;
  views: number;
}

const data: ChartData[] = [
  { date: "Oct 1", value: 150 },
  { date: "Oct 2", value: 280 },
  { date: "Oct 3", value: 380 },
  { date: "Oct 4", value: 250 },
  { date: "Oct 5", value: 300 },
  { date: "Oct 6", value: 680 },
  { date: "Oct 7", value: 1020 },
  { date: "Oct 8", value: 950 },
  { date: "Oct 9", value: 1180 },
  { date: "Oct 10", value: 880 },
  { date: "Oct 11", value: 720 },
  { date: "Oct 12", value: 650 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      date: string;
      value: number;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const date = payload[0].payload.date;

    // Sample data for tooltip - in real app, this would come from the data
    const tooltipData: TooltipData = {
      inquires: 32,
      payments: 5,
      views: 850,
    };

    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
        <p className="text-sm font-semibold text-gray-700 mb-2">{date}</p>
        <div className="space-y-1">
          <p className="text-sm">
            <span className="text-green-500 font-medium">inquires:</span>{" "}
            <span className="text-green-500 font-semibold">
              {tooltipData.inquires}
            </span>
          </p>
          <p className="text-sm">
            <span className="text-orange-500 font-medium">payments:</span>{" "}
            <span className="text-orange-500 font-semibold">
              {tooltipData.payments}
            </span>
          </p>
          <p className="text-sm">
            <span className="text-blue-500 font-medium">views:</span>{" "}
            <span className="text-blue-500 font-semibold">
              {tooltipData.views}
            </span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default function Chart() {
  return (
    <Card className="w-full border-2 border-gray-200 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-black">
          Performance Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="0"
              stroke="#e5e7eb"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 14 }}
              ticks={[0, 350, 700, 1050, 1400]}
              domain={[0, 1400]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ strokeDasharray: "3 3" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
