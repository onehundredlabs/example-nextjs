import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface KPIProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
}

export const KPI: React.FC<KPIProps> = ({
  title,
  value,
  description,
  icon,
}) => {
  return (
    <Card className="min-w-80 border border-gray-200 bg-white rounded-lg shadow-sm">
      <CardHeader className="flex items-start justify-between">
        <div>
          <CardTitle className="text-gray-800 font-semibold">{title}</CardTitle>
          {description && (
            <CardDescription className="text-gray-500 text-sm">
              {description}
            </CardDescription>
          )}
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </CardContent>
    </Card>
  );
};
