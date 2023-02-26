function DocumentComponent() {
  return (
    <tr className="border-b-1 h-16 border-neutral-500">
      <td className="px-12">
        <p className="cursor-pointer text-sm text-primaryText underline">
          upload_1
        </p>
      </td>
      <td className="px-12">
        <button className="bg-blue-400 text-sm text-white py-1 px-4 rounded-md">
          Retrieve
        </button>
      </td>
    </tr>
  )
}

export default DocumentComponent
