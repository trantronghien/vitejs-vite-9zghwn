const Switch = (childID: string, options?: any) => {
  return [
    {
      id: `${childID}.1`,
      parentId: `${childID}`,
      type: 'group',
      layout: 'horizontal',
      elements: [
        {
          id: `${childID}.1.1`,
          parentId: `${childID}.1`,
          type: 'label',
          properties: {
            value: 'Label của switch',
            background: '#FFFFFF',
            textColor: '#000000',
            fontSize: '20',
            fontWeight: 'bold', // normal
          },
          rule: [],
          elements: [],
        },
        {
          id: `${childID}.1.2`,
          type: 'switch',
          parentId: `${childID}.1`,
          label: 'Kiểm tra cửa chính ...',
          properties: {
            value: false,
            readonly: false,
            offLabel: 'Not Ok',
            onLabel: 'Ok',
          },
          rule: [
            // switch ok không cần nhập ghi chú và hình ảnh
            options.isRequireNote
              ? {
                  action: 'hide',
                  value: !options.isRequireNote, // không cần nhập ghi chú
                  condition: {
                    ref: `${childID}.2.1`,
                    schema: {
                      value: true,
                    },
                  },
                }
              : null,
            options.isRequireImage
              ? {
                  value: !options.isRequireImage, // không cần chụp ảnh
                  action: 'hide',
                  condition: {
                    ref: `${childID}.2.2`,
                    schema: {
                      value: true,
                    },
                  },
                }
              : null,
          ],
          elements: [],
        },
      ],
    },
    {
      id: `${childID}.2`,
      parentId: `${childID}`,
      label: '',
      type: 'group',
      layout: 'horizontal',
      elements: [
        {
          id: `${childID}.2.1`,
          parentId: `${childID}.2`,
          type: 'text',
          label: 'Ghi chú',
          properties: {
            required: true, // bắt buộc ghi chú
            value: 'true',
            readonly: false,
            length: 300,
            multiline: false,
            hint: 'Xin nhập ghi chú',
          },
          rule: [
            {
              action: 'hide',
              condition: {
                ref: `${childID}.2.1`,
                schema: {
                  required: false,
                },
              },
            },
          ],
        },
        {
          id: `${childID}.2.2`,
          parentId: `${childID}.2`,
          type: 'image',
          label: 'Ảnh Bt',
          properties: {
            required: true, // bắt buộc có ảnh
            length: 3,
            description: 'Cần chụp ảnh để',
            minimum: 0,
          },
          rule: [
            {
              action: 'hide',
              condition: {
                ref: `${childID}.2.2`,
                schema: {
                  required: false,
                },
              },
            },
          ],
          elements: [],
        },
      ],
    },
    {
      id: `${childID}.3`,
      parentId: `${childID}`,
      type: 'text',
      label: 'Ghi chú TPKT',
      properties: {
        readonly: true,
        multiline: false,
      },
      rule: [
        {
          action: 'hide',
          condition: {
            ref: `${childID}.3`,
            schema: {
              value: '',
            },
          },
        },
      ],
    },
  ];
};
