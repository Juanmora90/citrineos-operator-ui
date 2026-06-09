// SPDX-FileCopyrightText: 2025 Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache-2.0
'use client';

import { OCPP2_0_1, type SampledValue } from '@citrineos/base';
import GenericTag from '@lib/client/components/tag';
import { Separator } from '@lib/client/components/ui/separator';
import React from 'react';

import { useTranslate } from '@refinedev/core';

interface SampledValueProps {
  sampledValue: SampledValue;
}

export const SampledValueView: React.FC<SampledValueProps> = ({
  sampledValue,
}) => {
  const translate = useTranslate();
  const DescriptionRow = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="grid grid-cols-3 gap-4 py-3 border-b last:border-b-0">
      <div className="font-medium text-sm text-muted-foreground">{label}</div>
      <div className="col-span-2 text-sm">{children}</div>
    </div>
  );

  return (
    <div className="border rounded-lg overflow-hidden">
      <DescriptionRow label={translate('columns.value', 'Value')}>
        {sampledValue.value !== null && sampledValue.value !== undefined ? (
          sampledValue.value
        ) : (
          <span className="text-muted-foreground">N/A</span>
        )}
      </DescriptionRow>

      <DescriptionRow label={translate('columns.context', 'Context')}>
        {sampledValue.context ? (
          <GenericTag
            enumValue={sampledValue.context as OCPP2_0_1.ReadingContextEnumType}
            enumType={OCPP2_0_1.ReadingContextEnumType}
          />
        ) : (
          <span className="text-muted-foreground">N/A</span>
        )}
      </DescriptionRow>

      <DescriptionRow label={translate('columns.measurand', 'Measurand')}>
        {sampledValue.measurand ? (
          <GenericTag
            enumValue={sampledValue.measurand as OCPP2_0_1.MeasurandEnumType}
            enumType={OCPP2_0_1.MeasurandEnumType}
          />
        ) : (
          <span className="text-muted-foreground">N/A</span>
        )}
      </DescriptionRow>

      <DescriptionRow label={translate('columns.phase', 'Phase')}>
        {sampledValue.phase ? (
          <GenericTag
            enumValue={sampledValue.phase as OCPP2_0_1.PhaseEnumType}
            enumType={OCPP2_0_1.PhaseEnumType}
          />
        ) : (
          <span className="text-muted-foreground">N/A</span>
        )}
      </DescriptionRow>

      <DescriptionRow label={translate('columns.location', 'Location')}>
        {sampledValue.location ? (
          <GenericTag
            enumValue={sampledValue.location as OCPP2_0_1.LocationEnumType}
            enumType={OCPP2_0_1.LocationEnumType}
          />
        ) : (
          <span className="text-muted-foreground">N/A</span>
        )}
      </DescriptionRow>
    </div>
  );
};

interface SampledValuesListProps {
  sampledValues: SampledValue[];
}

export const SampledValuesListView: React.FC<SampledValuesListProps> = ({
  sampledValues,
}) => {
  const translate = useTranslate();
  return (
    <div className="space-y-6">
      {sampledValues.map((sampledValue, index) => (
        <div key={index}>
          <div className="flex items-center gap-4 mb-4">
            <Separator className="flex-1" />
            <h4 className="text-sm font-medium text-muted-foreground">
              {translate('columns.sampledValue', 'Sampled Value')} {index + 1}
            </h4>
            <Separator className="flex-1" />
          </div>
          <SampledValueView sampledValue={sampledValue} />
        </div>
      ))}
    </div>
  );
};
