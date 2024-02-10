import React from 'react';

export default function Table(props) {



  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    <th scope="col" className="px-6 py-4 rounded-tl-lg">Name</th>
                    <th scope="col" className="px-6 py-4">Created</th>
                    <th scope="col" className="px-6 py-4 rounded-tr-lg">By</th>
                </tr>
              </thead>
              <tbody>
                {props.data && props.data.map((row) => <tr key={row.key} className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{row.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{row.created_at}</td>
                  {/* <td className="whitespace-nowrap px-6 py-4">{row.created_by}</td> */}
                  <td className="whitespace-nowrap px-6 py-4">
                    <img alt="avatar" class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
