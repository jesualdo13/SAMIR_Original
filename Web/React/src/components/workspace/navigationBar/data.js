import FormEmployeeSuppliersCustomers from "../forms/FormEmployeeSuppliersCustomers";
import FormReferenceGuides from "../forms/FormReferenceGuides";
import FormCreditNotes from "../forms/FormCreditNotes";
import FormCashClosing from "../forms/FormCashClosing";
import FormCategories from "../forms/FormCategories";
import FormRetentions from "../forms/FormRetentions";
import FormInventory from "../forms/FormInventory";
import FormPurchases from "../forms/FormPurchases";
import FormBilling from "../forms/FormBilling";
import FormGroups from "../forms/FormGroups";

import {
  IconInfoCircle,
  IconBusiness,
  IconCalculator,
  IconGrid,
  IconHelpCircle,
  IconHome,
  IconLogout,
  IconPlugin,
  IconPrint,
  IconSearch,
  IconSettings,
  IconHelpBuoy,
} from "../../../base/Icons";

export const data = [
  {
    text: "Inicio",
    icon: <IconGrid />,
    children: [
      {
        text: "Buscador General",
        icon: <IconSearch />,
      },
      {
        text: "Dashboard",
        icon: <IconHome />,
      },
      {
        text: "Visualizar Último Asiento",
        icon: "",
      },
      {
        text: "Visualizar Ultima Factura",
        icon: "",
      },
      {
        text: "Visualizar Ultima Compra",
        icon: "",
      },
      {
        text: "Calculadora",
        icon: "",
      },
      {
        text: "Cerrar Sesión",
        icon: <IconLogout />,
      },
      {
        text: "Acerca De",
        icon: <IconInfoCircle />,
      },
    ],
  },
  {
    text: "Registro y Control",
    icon: <IconBusiness />,
    children: [
      {
        text: "Caja y Movimientos",
        icon: "",
        children: [
          {
            text: "Fichero de Cajas",
            icon: "",
          },
          {
            text: "Cierres de Caja",
            icon: "",
            id: 6,
            form: <FormCashClosing id={6} type={0} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Anular Cierres de Caja", icon: "" },
          {
            text: "Ingreso/Egreso de Caja",
            icon: "",
            id: 13,
            form: <FormCashClosing id={13} type={1} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Anular Movimientos", icon: "" },
        ],
      },
      {
        text: "Inventarios",
        icon: "",
        children: [
          {
            text: "Fichero de Categorías/Inventario",
            icon: "",
            id: 2,
            form: <FormCategories id={2} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Fichero de Bodegas", icon: "" },
          {
            text: "Fichero de Productos/Servicios",
            icon: "",
            id: 1,
            form: <FormInventory id={1} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Inventario Inicial Masivo", icon: "" },
          { text: "Libreta de Control de Inventario", icon: "" },
          { text: "Transferencia entre Bodegas", icon: "" },
          { text: "Transferencia entre Sucursales", icon: "" },
          { text: "Ajustes de Inventario", icon: "" },
          { text: "Anular Ajustes de Inventario", icon: "" },
          { text: "Reprocesamiento de Stock", icon: "" },
        ],
      },
      {
        text: "Zonas/Rutas/Grupos",
        icon: "",
        children: [
          { text: "Fichero de Zonas", icon: "" },
          { text: "Fichero de Rutas", icon: "" },
          {
            text: "Fichero de Grupos - Personas",
            icon: "",
            id: 3,
            form: <FormGroups id={3} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        ],
      },
      {
        text: "Empleados",
        icon: "",
        children: [
          {
            text: "Fichero de Empleados",
            icon: "",
            id: 10,
            form: <FormEmployeeSuppliersCustomers id={10} type={0} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Anticipos o Prestamos Empleados", icon: "" },
          { text: "Anular Anticipo o Préstamos", icon: "" },
          { text: "Pago de Anticipos Empleados", icon: "" },
          { text: "Anular Pago de Anticipo", icon: "" },
        ],
      },
      {
        text: "Nómina de Empleados",
        icon: "",
        children: [
          { text: "Fichero Rol de pagos", icon: "" },
          { text: "Anular Rol de Pagos", icon: "" },
          { text: "Pago de Rol Individual", icon: "" },
          { text: "Pago de Rol Mensual", icon: "" },
          { text: "Anular Pago Rol", icon: "" },
        ],
      },
      {
        text: "Clientes",
        icon: "",
        children: [
          {
            text: "Fichero de Clientes",
            icon: "",
            id: 9,
            form: <FormEmployeeSuppliersCustomers id={9} type={2} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Débito Adicional", icon: "" },
          { text: "Anular Débito Adicional", icon: "" },
          { text: "Registro de Notas de Débito (facturas)", icon: "" },
          { text: "Anular Notas de Débito", icon: "" },
          { text: "Anticipos Clientes", icon: "" },
          { text: "Anular Anticipo Clientes", icon: "" },
          { text: "Cruce de Valores a Favor", icon: "" },
          { text: "Anular Cruces de Valores a Favor", icon: "" },
          { text: "Estado de Cuenta Clientes", icon: "" },
          { text: "Comprobantes de Ingreso", icon: "" },
          { text: "Anular Comprobantes de Ingreso", icon: "" },
        ],
      },
      {
        text: "Proveedores",
        icon: "",
        children: [
          {
            text: "Fichero de Proveedores",
            icon: "",
            id: 11,
            form: <FormEmployeeSuppliersCustomers id={11} type={1} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Débito Adicional", icon: "" },
          { text: "Anular Débito Adicional", icon: "" },
          { text: "Anticipos Proveedores", icon: "" },
          { text: "Anular Anticipo Proveedores", icon: "" },
          { text: "Cruce de Valores a Favor", icon: "" },
          { text: "Anular Cruces de Valores a Favor", icon: "" },
          { text: "Estado de Cuenta Proveedores", icon: "" },
          { text: "Comprobantes de Egreso", icon: "" },
          { text: "Anular Comprobantes de Egreso", icon: "" },
        ],
      },
      {
        text: "Liquidación de Compras",
        icon: "",
        children: [
          { text: "Fichero de Rubros Descuentos", icon: "" },
          { text: "Liquidación de Compra de Inventario", icon: "" },
          { text: "Anular Liquidación de Compra Inventario", icon: "" },
          { text: "Devolución de Liquidación (NC)", icon: "" },
          { text: "Anular Devolución (NC)", icon: "" },
          { text: "Descuento en Compras de Liquidación (NC)", icon: "" },
          { text: "Anular Descuento (NC)", icon: "" },
          { text: "Retención Emitida a Liquidación (LIQ-INV)", icon: "" },
          { text: "Anular Retención", icon: "" },
        ],
      },
      {
        text: "Compras",
        icon: "",
        children: [
          { text: "Fichero de Rubros Descuentos", icon: "" },
          { text: "Órdenes de Compra", icon: "" },
          { text: "Revisar Orden de Compra", icon: "" },
          { text: "Anular Orden de Compra", icon: "" },
          {
            text: "Compra de Inventario",
            icon: "",
            id: 5,
            form: <FormPurchases id={5} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Modificar Precios por Factura", icon: "" },
          { text: "Modificar Lotes por Factura", icon: "" },
          { text: "Anular Compra de Inventario", icon: "" },
          { text: "Devolución de Inventario (NC)", icon: "" },
          { text: "Anular Devolución (NC)", icon: "" },
          { text: "Descuento en Compras de Inventario (NC)", icon: "" },
          { text: "Anular Descuento (NC)", icon: "" },
          { text: "Retención Emitida (COM-INV)", icon: "" },
          { text: "Anular Retención", icon: "" },
        ],
      },
      {
        text: "Gastos",
        icon: "",
        children: [
          { text: "Fichero de Rubros Gastos", icon: "" },
          { text: "Fichero de Rubros Descuentos", icon: "" },
          {
            text: "Compra de Inventario",
            icon: "",
          },
          { text: "Modificar Precios por Factura", icon: "" },
          { text: "Modificar Lotes por Factura", icon: "" },
          { text: "Anular Compra de Inventario", icon: "" },
          { text: "Devolución de Inventario (NC)", icon: "" },
          { text: "Anular Devolución (NC)", icon: "" },
          { text: "Descuento en Compras de Inventario(NC)", icon: "" },
          { text: "Anular Descuento (NC)", icon: "" },
          { text: "Retención Emitida (COM-INV)", icon: "" },
          { text: "Anular Retención", icon: "" },
        ],
      },
      {
        text: "Ventas",
        icon: "",
        children: [
          { text: "Fichero de Rubros Descuentos", icon: "" },
          {
            text: "Registrar Factura",
            icon: "",
            id: 12,
            form: <FormBilling id={12} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Anular Factura", icon: "" },
          { text: "Registrar Orden de Venta", icon: "" },
          { text: "Anular Orden de Venta", icon: "" },
          { text: "Registrar Proforma", icon: "" },
          { text: "Facturar Proforma", icon: "" },
          { text: "Modificar Proforma", icon: "" },
          { text: "Anular Proforma", icon: "" },
          {
            text: "Devolución de Factura (NC)",
            icon: "",
            id: 4,
            form: <FormCreditNotes id={4} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Anular Devolución (NC)", icon: "" },
          { text: "Descuento en Facturas (NC)", icon: "" },
          { text: "Anular Descuento (NC)", icon: "" },
          {
            text: "Retención Recibidas (FACT)",
            icon: "",
            id: 8,
            form: <FormRetentions id={8} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Anular Retención", icon: "" },
        ],
      },
      {
        text: "Guías de Remisión",
        icon: "",
        children: [
          {
            text: "Registrar Guía de Remisión",
            icon: "",
            id: 7,
            form: <FormReferenceGuides id={7} />,
            info: "Información sobre el formulario\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          { text: "Anular Guía de Remisión", icon: "" },
        ],
      },
      {
        text: "Documentos Electrónicos",
        icon: "",
        children: [{ text: "Monitor de Autorización", icon: "" }],
      },
    ],
  },
  {
    text: "Contabilidad",
    icon: <IconCalculator />,
    children: [
      {
        text: "Periodos Contables",
        icon: "",
        children: [{ text: "Fichero de Periodos", icon: "" }],
      },
      {
        text: "Centro de Costos",
        icon: "",
        children: [
          { text: "Fichero de Centro de Costos", icon: "" },
          { text: "Estado de Resultados por Centro", icon: "" },
        ],
      },
      {
        text: "Plan de Cuentas",
        icon: "",
        children: [
          { text: "Fichero de Cuentas Contables", icon: "" },
          { text: "Parámetros Contables", icon: "" },
        ],
      },
      {
        text: "Libro Diario",
        icon: "",
        children: [
          { text: "Visualizar Diario", icon: "" },
          { text: "Visualizar Asiento", icon: "" },
          { text: "Modificar Asientos", icon: "" },
          { text: "Anular Asiento (Revertir)", icon: "" },
          { text: "Eliminar Asiento", icon: "" },
        ],
      },
      {
        text: "Bancos",
        icon: "",
        children: [
          { text: "Fichero de Cuentas Bancarias", icon: "" },
          { text: "Registro de Operaciones Bancarias", icon: "" },
          { text: "Registro de Transferencias Bancarias", icon: "" },
          { text: "Registro de Depósitos CAJA-BANCOS", icon: "" },
          { text: "Anular Operaciones bancarias", icon: "" },
          { text: "Anular Depositos", icon: "" },
          { text: "Conciliación Bancaria", icon: "" },
          { text: "Registro de Cheques Posfechados", icon: "" },
          { text: "Anular Cheques", icon: "" },
          { text: "Conciliación de Cheques", icon: "" },
          { text: "Retenciones Bancarias", icon: "" },
          { text: "Anular retenciones Bancarias", icon: "" },
        ],
      },
      {
        text: "Informes Contables",
        icon: "",
        children: [
          { text: "Mayor de Cuentas", icon: "" },
          { text: "Saldos de Cuentas", icon: "" },
          { text: "Estado Resultados", icon: "" },
          { text: "Balance de Comprobación", icon: "" },
          { text: "Balance General", icon: "" },
        ],
      },
      {
        text: "SRI",
        icon: "",
        children: [{ text: "Generar ATS", icon: "" }],
      },
    ],
  },
  {
    text: "Reportes",
    icon: <IconPrint />,
    children: [
      {
        text: "Administrador de Reportes",
        icon: "",
      },
      {
        text: "Cartera",
        icon: "",
        children: [
          { text: "Estado de Cuenta Cliente", icon: "" },
          { text: "Reporte de Cartera Vencida", icon: "" },
          { text: "Créditos General", icon: "" },
          { text: "Anticipos General", icon: "" },
        ],
      },
      {
        text: "Ventas",
        icon: "",
        children: [
          { text: "Facturas de Venta", icon: "" },
          { text: "Órdenes de Venta", icon: "" },
          { text: "Notas de Crédito", icon: "" },
          { text: "Retenciones", icon: "" },
        ],
      },
      {
        text: "Compras",
        icon: "",
        children: [
          { text: "Compras de Inventario", icon: "" },
          { text: "Gastos", icon: "" },
          { text: "Notas de Credito", icon: "" },
          { text: "Retenciones", icon: "" },
        ],
      },
      {
        text: "Utilidades",
        icon: "",
        children: [
          { text: "Márgenes de Utilidad consolidado", icon: "" },
          { text: "Márgenes de Utilidad por productos", icon: "" },
          { text: "Márgenes de Utilidad por Factura", icon: "" },
        ],
      },
      {
        text: "SRI",
        icon: "",
        children: [
          { text: "Informes Ventas", icon: "" },
          { text: "Informes Compras de Inventario", icon: "" },
          { text: "Informes Gastos", icon: "" },
          { text: "Informe General (Compras)", icon: "" },
        ],
      },
    ],
  },
  {
    text: "Complementos",
    icon: <IconPlugin />,
    children: [
      {
        text: "Plugin 1",
        icon: "",
      },
    ],
  },
  {
    text: "Configuración",
    icon: <IconSettings />,
    children: [
      {
        text: "Perfil de Empresa",
        icon: "",
      },
      {
        text: "Rubros e Impuestos",
        icon: "",
      },
      {
        text: "Configuración Local",
        icon: "",
      },
      {
        text: "Configuración General",
        icon: "",
      },
      {
        text: "Plantillas",
        icon: "",
      },
    ],
  },
  {
    text: "Ayuda",
    icon: <IconHelpCircle />,
    children: [
      {
        text: "Video Tutoriales",
        icon: "",
      },
      {
        text: "Soporte Técnico",
        icon: <IconHelpBuoy />,
      },
      {
        text: "Acerca de Samir App",
        icon: <IconHelpCircle />,
      },
    ],
  },
];
