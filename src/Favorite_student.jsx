
function Favorite_student(props) {
    const favorites = props.Favorite_student1;

    function Delete_student(student) {
        props.setFavorite_list1(function (oldList) {
            return oldList.filter(function (item) {
                return item !== student;
            });
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 p-5">

            <div className="mx-auto max-w-xl rounded-xl bg-white p-5 shadow">

                {/* Heading */}
                <div className="mb-5 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-pink-600">
                        ♥ Favorite Students
                    </h1>

                    <span className="rounded-lg bg-pink-100 px-3 py-2 text-pink-600">
                        {favorites.length} Saved
                    </span>
                </div>

                {/* Empty Message */}
                {favorites.length === 0 ? (
                    <div className="rounded-lg bg-pink-50 p-6 text-center">
                        <p className="mb-3 text-3xl">💗</p>

                        <h2 className="font-semibold text-gray-700">
                            No Favorite Students
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Add students to your favorite list.
                        </p>

                        <button
                            onClick={props.goToStudents}
                            className="mt-4 rounded-lg bg-pink-500 px-4 py-2 text-white"
                        >
                            Back to Students
                        </button>
                    </div>
                ) : (

                    /* Favorite List */
                    favorites.map(function (student) {
                        return (
                            <div
                                key={student}
                                className="mb-3 flex items-center justify-between rounded-lg border border-pink-100 p-4 hover:bg-pink-50"
                            >
                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
                                        {student.charAt(0)}
                                    </div>

                                    <div>
                                        <h2 className="font-semibold text-gray-800">
                                            {student}
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            Favorite Student
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={function () {
                                        Delete_student(student);
                                    }}
                                    className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600 hover:bg-red-200"
                                >
                                    Remove
                                </button>
                            </div>
                        );
                    })
                )}

            </div>
        </div>
    );
}

export default Favorite_student;
